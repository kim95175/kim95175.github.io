import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function haveSameElements(arr1: string[], arr2: string[]) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  if (set1.size !== set2.size) return false;
  return [...set1].every((item) => set2.has(item));
}

export function formatTaskType(str: string): string {
  return str.replace(/_/g, ' ').toLowerCase();
}

export function getGCSThumbnailUrl(id: string) {
  return `gs://pyler-thumbnail-storage-production/${id}.jpg`;
}
export function getYoutubeThumbnailUrl(id: string) {
  return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
}

export function parseVideoId(input?: string) {
  if (!input) {
    return undefined;
  }
  const vidPattern = /([A-Za-z0-9_-]{11})/;
  const match = input.match(vidPattern);
  if (match && match[1]) {
    return match[1];
  }
  return undefined;
}

const isBase64Encoded = (str: string) => {
  return /^[A-Za-z0-9+/=]+$/.test(str);
};

export const getAvatar = ({ avatar }: { avatar?: string }) => {
  if (!avatar) {
    return '/images/noAvatar2.jpg';
  }
  if (isBase64Encoded(avatar)) {
    return `data:image/png;base64,${avatar}`;
  }
  return avatar;
};

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  return allowedTypes.includes(file.type);
};

export const validateFileSize = (file: File, maxSizeMB: number): boolean => {
  const sizeInMB = file.size / 1024 / 1024;
  return sizeInMB < maxSizeMB;
};

export function truncateMiddle(
  text: string,
  frontChars: number = 15,
  backChars: number = 20,
): string {
  if (text.length <= frontChars + backChars) {
    return text;
  }
  const front = text.slice(0, frontChars);
  const back = text.slice(-backChars);
  return `${front}...${back}`;
}

export const escapeHtml = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const calculatePercentage = (currentValue: number, totalValue: number) => {
  return totalValue !== 0 ? (currentValue / totalValue) * 100 : 100;
};

export const sanitizeExportData = (text: string) => {
  return text.replace(/\n/g, ' ').replace(/,/g, ' ');
};
