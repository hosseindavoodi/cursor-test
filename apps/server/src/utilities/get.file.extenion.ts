export function getFileExtension(filename: string): string {
  /**
   * Extracts the file extension from a filename.
   * Returns the extension (without the dot) or an empty string if no extension exists.
   *
   * @param filename - The name of the file (e.g., 'document.txt', 'my.file.tar.gz', '.gitignore')
   * @returns The file extension (e.g., 'txt', 'tar.gz', '') or empty string if no extension
   */
  if (!filename || typeof filename !== 'string') {
    return '';
  }

  // Split by path separators to get just the file part
  const filePart: string = filename.split(/[\\/]/).pop()!;

  // Handle cases like '.gitignore' or empty strings
  if (!filePart || (filePart.startsWith('.') && !filePart.includes('.', 1))) {
    return '';
  }

  // Split by dots and get the last part(s)
  const parts: string[] = filePart.split('.');

  // If there's no extension (e.g., 'README')
  if (parts.length === 1) {
    return '';
  }

  // Join all parts after the first dot for compound extensions (e.g., 'tar.gz')
  return parts.slice(1).join('.').toLowerCase();
}
