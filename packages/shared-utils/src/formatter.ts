/**
 * FlowForge Shared Utilities
 * Formatting utilities for consistent data presentation
 */

/**
 * Format a date to a human-readable string
 * @param date The date to format
 * @param includeTime Whether to include the time in the formatted string
 * @returns A formatted date string
 */
export function formatDate(date: Date | string | number, includeTime = false): string {
  const d = new Date(date);
  const dateStr = d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  if (includeTime) {
    const timeStr = d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    return `${dateStr} at ${timeStr}`;
  }
  
  return dateStr;
}

/**
 * Format a number with commas as thousands separators
 * @param num The number to format
 * @returns A formatted number string
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format bytes to a human-readable string (KB, MB, GB, etc.)
 * @param bytes The number of bytes
 * @param decimals The number of decimal places to show
 * @returns A formatted size string
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}