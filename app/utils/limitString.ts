export default function limitString(str: string, limit: number = 10) {
  if (str.length < limit) return str

  return `${str.split(' ').slice(0, limit).join(' ')}...`
}
