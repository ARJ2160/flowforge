/**
 * FlowForge Shared Utilities
 * Validation utilities for data integrity checking
 */
import { z } from 'zod';

/**
 * Email validation schema
 */
export const EmailSchema = z.string().email();

/**
 * Validates an email address
 * @param email The email address to validate
 * @returns Boolean indicating whether the email is valid
 */
export function isValidEmail(email: string): boolean {
  try {
    EmailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
}

/**
 * URL validation schema
 */
export const UrlSchema = z.string().url();

/**
 * Validates a URL
 * @param url The URL to validate
 * @returns Boolean indicating whether the URL is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    UrlSchema.parse(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a string is empty (empty or whitespace-only)
 * @param value The string to check
 * @returns Boolean indicating whether the string is empty
 */
export function isEmpty(value?: string): boolean {
  return !value || value.trim() === '';
}

/**
 * Validates if a number is within a specific range
 * @param value The number to validate
 * @param min The minimum allowed value
 * @param max The maximum allowed value
 * @returns Boolean indicating whether the number is within range
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}