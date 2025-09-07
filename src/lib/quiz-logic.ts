/**
 * Spirit Animal Quiz Logic and Scoring Algorithm
 * 
 * This file contains the core logic for calculating spirit animal results
 * based on user responses to the quiz questions. It implements the scoring
 * algorithm, confidence calculation, and result interpretation logic.
 * 
 * Author: Spirit Animal Discovery Team
 * Date: 2024
 * Purpose: Core quiz calculation engine for determining user's spirit animal
 * 
 * Functions:
 * - SpiritAnimalCalculator: Main class for calculating results
 * - calculateResult: Processes user responses and calculates scores
 * - getResultWithSecondary: Determines primary and secondary animals
 * - calculateConfidence: Determines confidence level in results
 * - validateResponses: Validates user input data
 */

import { 
  QuestionResponse, 
  SpiritAnimalScore, 
  QuizResult, 
  ScoringConfig,
  DEFAULT_CONFIG,
  CONFIDENCE_LEVELS 
} from './types';

/**
 * Main calculator class for determining spirit animal results
 * 
 * This class processes user quiz responses and calculates which spirit animal
 * best matches their personality based on the scoring algorithm.
 * 
 * Usage:
 * const calculator = new SpiritAnimalCalculator();
 * const result = calculator.calculateResult(userResponses);
 */
export class SpiritAnimalCalculator {
  private config: ScoringConfig;

  /**
   * Constructor for SpiritAnimalCalculator
   * 
   * @param config - Optional configuration object for customizing scoring behavior
   *                 If not provided, uses DEFAULT_CONFIG values
   */
  constructor(config: ScoringConfig = DEFAULT_CONFIG) {
    this.config = config;
  }

  /**
   * Calculates spirit animal scores based on user responses
   * 
   * This is the main calculation method that processes all user responses,
   * applies the scoring algorithm, and returns ranked spirit animal scores.
   * 
   * @param responses - Array of user responses to quiz questions
   * @returns Array of spirit animal scores sorted by total points (highest first)
   * 
   * Algorithm:
   * 1. Initialize score tracking for all animals
   * 2. Process each response and add points to corresponding animals
   * 3. Apply confidence modifier based on number of answered questions
   * 4. Sort results by total points in descending order
   */
  calculateResult(responses: QuestionResponse[]): SpiritAnimalScore[] {
    // Validate input data before processing
    this.validateResponses(responses);

    // Initialize score tracking object for all animals
    const animalScores: { [animal: string]: number } = {};
    const categoryBreakdown: { [animal: string]: { [category: string]: number } } = {};

    // Process each response and accumulate points
    responses.forEach(response => {
      // Skip responses marked as 'unknown' or 'skip'
      if (response.selectedOption !== 'unknown' && response.selectedOption !== 'skip') {
        // Add points for each animal based on the selected option
        Object.entries(response.points).forEach(([animal, points]) => {
          // Initialize animal score if not exists
          if (!animalScores[animal]) {
            animalScores[animal] = 0;
            categoryBreakdown[animal] = {};
          }
          
          // Add points to total score
          animalScores[animal] += points;
          
          // Track points by category (if available in response)
          // Note: This would require extending QuestionResponse to include category
          // For now, we'll use a simplified approach
        });
      }
    });

    // Calculate confidence modifier based on answered questions
    const answeredQuestions = responses.filter(r => 
      r.selectedOption !== 'unknown' && r.selectedOption !== 'skip'
    ).length;
    
    // Confidence modifier: minimum 10 questions for full confidence
    const confidenceModifier = Math.min(answeredQuestions / 10, 1);

    // Convert to SpiritAnimalScore array and apply confidence modifier
    const results: SpiritAnimalScore[] = Object.entries(animalScores)
      .map(([animal, score]) => ({
        animalName: animal,
        totalPoints: Math.round(score * confidenceModifier),
        categoryBreakdown: categoryBreakdown[animal] || {},
        confidence: confidenceModifier
      }))
      .sort((a, b) => b.totalPoints - a.totalPoints);

    return results;
  }

  /**
   * Determines primary and secondary spirit animals with confidence assessment
   * 
   * This method takes the calculated scores and determines the final result,
   * including whether to show a secondary animal and the overall confidence level.
   * 
   * @param scores - Array of spirit animal scores from calculateResult()
   * @returns QuizResult object with primary animal, optional secondary, and confidence
   * 
   * Logic:
   * - Primary animal is always the highest scoring
   * - Secondary animal shown if within 70% of primary score
   * - Confidence determined by score difference and questions answered
   */
  getResultWithSecondary(scores: SpiritAnimalScore[]): QuizResult {
    if (scores.length === 0) {
      throw new Error('No scores provided for result calculation');
    }

    const [primary, secondary] = scores;
    
    // Calculate confidence level based on score difference and primary confidence
    const confidenceLevel = this.calculateConfidence(primary, secondary);
    
    // Determine if secondary animal should be shown
    // Secondary shown if it has at least 70% of primary's score
    const shouldShowSecondary = secondary && 
      secondary.totalPoints >= primary.totalPoints * this.config.secondaryAnimalThreshold;

    return {
      primary,
      secondary: shouldShowSecondary ? secondary : undefined,
      confidence: confidenceLevel,
      totalQuestionsAnswered: Math.round(primary.confidence * 15), // Assuming 15 total questions
      skippedQuestions: 15 - Math.round(primary.confidence * 15)
    };
  }

  /**
   * Calculates confidence level for the quiz result
   * 
   * This method determines whether the result has high, medium, or low confidence
   * based on the score difference between primary and secondary animals,
   * and the number of questions answered.
   * 
   * @param primary - The primary spirit animal score
   * @param secondary - The secondary spirit animal score (optional)
   * @returns Confidence level: 'high', 'medium', or 'low'
   * 
   * Confidence Criteria:
   * - High: 80%+ questions answered AND clear winner (20+ points ahead)
   * - Medium: 60%+ questions answered AND moderate winner (10-20 points ahead)
   * - Low: <60% questions answered OR tie scenario (<10 points difference)
   */
  private calculateConfidence(
    primary: SpiritAnimalScore, 
    secondary?: SpiritAnimalScore
  ): 'high' | 'medium' | 'low' {
    // Check if enough questions were answered for high confidence
    const hasHighConfidenceAnswers = primary.confidence >= this.config.confidenceThresholds.high;
    
    // Check if enough questions were answered for medium confidence
    const hasMediumConfidenceAnswers = primary.confidence >= this.config.confidenceThresholds.medium;
    
    // Calculate score difference between primary and secondary
    const scoreDifference = secondary ? primary.totalPoints - secondary.totalPoints : primary.totalPoints;
    
    // Determine confidence based on answers and score difference
    if (hasHighConfidenceAnswers && scoreDifference >= 20) {
      return CONFIDENCE_LEVELS.HIGH;
    } else if (hasMediumConfidenceAnswers && scoreDifference >= 10) {
      return CONFIDENCE_LEVELS.MEDIUM;
    } else {
      return CONFIDENCE_LEVELS.LOW;
    }
  }

  /**
   * Validates user responses for data integrity
   * 
   * This method ensures that the response data is valid before processing,
   * checking for required fields and proper data types.
   * 
   * @param responses - Array of user responses to validate
   * @throws Error if validation fails
   * 
   * Validation Rules:
   * - Responses must be an array
   * - Each response must have questionId, selectedOption, and points
   * - selectedOption must be valid (A, B, C, D, E, F, 'unknown', 'skip')
   * - points must be an object with animal names as keys and numbers as values
   */
  private validateResponses(responses: QuestionResponse[]): void {
    if (!Array.isArray(responses)) {
      throw new Error('Responses must be an array');
    }

    if (responses.length === 0) {
      throw new Error('At least one response is required');
    }

    const validOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'unknown', 'skip'];

    responses.forEach((response, index) => {
      // Check required fields
      if (!response.questionId || typeof response.questionId !== 'string') {
        throw new Error(`Response ${index}: questionId is required and must be a string`);
      }

      if (!response.selectedOption || typeof response.selectedOption !== 'string') {
        throw new Error(`Response ${index}: selectedOption is required and must be a string`);
      }

      if (!validOptions.includes(response.selectedOption)) {
        throw new Error(`Response ${index}: selectedOption must be one of: ${validOptions.join(', ')}`);
      }

      if (!response.points || typeof response.points !== 'object') {
        throw new Error(`Response ${index}: points is required and must be an object`);
      }

      // Validate points object structure
      Object.entries(response.points).forEach(([animal, points]) => {
        if (typeof points !== 'number' || points < 0) {
          throw new Error(`Response ${index}: points for animal '${animal}' must be a non-negative number`);
        }
      });
    });
  }

  /**
   * Gets the current configuration settings
   * 
   * @returns Current scoring configuration
   */
  getConfig(): ScoringConfig {
    return { ...this.config };
  }

  /**
   * Updates the configuration settings
   * 
   * @param newConfig - New configuration to apply
   */
  updateConfig(newConfig: Partial<ScoringConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

/**
 * Utility function to create a complete quiz result from responses
 * 
 * This is a convenience function that combines calculation and result processing
 * into a single step for easier use in components.
 * 
 * @param responses - Array of user responses
 * @param config - Optional configuration for the calculator
 * @returns Complete quiz result with primary/secondary animals and confidence
 * 
 * Usage:
 * const result = calculateQuizResult(userResponses);
 * console.log(`Your spirit animal is: ${result.primary.animalName}`);
 */
export function calculateQuizResult(
  responses: QuestionResponse[], 
  config?: ScoringConfig
): QuizResult {
  const calculator = new SpiritAnimalCalculator(config);
  const scores = calculator.calculateResult(responses);
  return calculator.getResultWithSecondary(scores);
}

/**
 * Utility function to get animal score by name
 * 
 * This helper function finds a specific animal's score from the results array.
 * 
 * @param scores - Array of spirit animal scores
 * @param animalName - Name of the animal to find
 * @returns SpiritAnimalScore object or undefined if not found
 * 
 * Usage:
 * const wolfScore = getAnimalScore(scores, 'wolf');
 * if (wolfScore) console.log(`Wolf score: ${wolfScore.totalPoints}`);
 */
export function getAnimalScore(
  scores: SpiritAnimalScore[], 
  animalName: string
): SpiritAnimalScore | undefined {
  return scores.find(score => score.animalName.toLowerCase() === animalName.toLowerCase());
}

/**
 * Utility function to calculate quiz completion percentage
 * 
 * This function determines what percentage of the quiz was completed
 * based on the number of valid responses.
 * 
 * @param responses - Array of user responses
 * @param totalQuestions - Total number of questions in the quiz (default: 15)
 * @returns Completion percentage (0-100)
 * 
 * Usage:
 * const completion = getCompletionPercentage(responses);
 * console.log(`Quiz completion: ${completion}%`);
 */
export function getCompletionPercentage(
  responses: QuestionResponse[], 
  totalQuestions: number = 15
): number {
  const answeredQuestions = responses.filter(r => 
    r.selectedOption !== 'unknown' && r.selectedOption !== 'skip'
  ).length;
  
  return Math.round((answeredQuestions / totalQuestions) * 100);
}

/**
 * Utility function to determine if result is reliable
 * 
 * This function checks if the quiz result is reliable enough to display
 * based on the number of questions answered and score differences.
 * 
 * @param result - Quiz result object
 * @returns True if result is reliable, false otherwise
 * 
 * Usage:
 * if (isResultReliable(result)) {
 *   displayResult(result);
 * } else {
 *   suggestRetake();
 * }
 */
export function isResultReliable(result: QuizResult): boolean {
  // Result is reliable if confidence is medium or high
  return result.confidence === CONFIDENCE_LEVELS.MEDIUM || 
         result.confidence === CONFIDENCE_LEVELS.HIGH;
}
