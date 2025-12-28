/**
 * Downloads a file from the given URL
 * @param url - The URL or path to the file to download
 * @param filename - Optional filename for the downloaded file. If not provided, extracts from URL
 */
export function downloadFile(url: string, filename?: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename || url.split("/").pop() || "download";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Downloads the resume PDF file
 */
export function downloadResume(): void {
  downloadFile("/rashi_resume.pdf", "rashi_resume.pdf");
}
