// lib/utils.ts
export function formatKenyanDate(dateString: string): string {
  // Parse the date and explicitly convert to Nairobi time
  const date = new Date(dateString);
  
  // Debug: log the original date
  console.log('Original date:', dateString);
  console.log('Parsed date UTC:', date.toISOString());
  
  // Format in Nairobi timezone
  const formatted = date.toLocaleString('en-KE', {
    timeZone: 'Africa/Nairobi',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  console.log('Formatted Nairobi time:', formatted);
  return formatted;
}

export function formatKenyanDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-KE', {
    timeZone: 'Africa/Nairobi',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}