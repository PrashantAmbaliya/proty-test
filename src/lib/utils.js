export function formatPrice(price) {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M`
  }
  if (price >= 1000) {
    return `${(price / 1000).toFixed(0)}K`
  }
  return `${price.toLocaleString()}`
}

export function formatArea(area) {
  return `${area.toLocaleString()} sq ft`
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function debounce(func, wait) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}