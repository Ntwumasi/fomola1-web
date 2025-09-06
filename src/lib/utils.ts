import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}

export const formatPhoneNumber = (phone: string): string => {
  // Format Ghana phone numbers
  if (phone.startsWith('0')) {
    return `+233${phone.slice(1)}`
  }
  if (phone.startsWith('233')) {
    return `+${phone}`
  }
  return phone
}