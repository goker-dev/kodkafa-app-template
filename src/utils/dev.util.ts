/**
 * Show the message if only of the ENV is DEV
 * @param message
 *
 * ex: DO NOT FORGET TO RUN LINTER!!!
 */
export function devMessage(message: string): string {
  return import.meta.env.DEV ? message : '';
}
