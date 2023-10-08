import { Result } from '../interface/results';


export const postCode = async (valueEditor: string): Promise<Result[]> => {
  const response = await fetch('http://localhost:3000/api/codejs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: valueEditor
    })
  })

  const body = await response.json()
  const { result } = body

  return result
}