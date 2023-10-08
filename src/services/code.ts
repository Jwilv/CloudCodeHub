

const postCode = async( valueEditor:string )=>{
    const response = await fetch('http://localhost:3000/api/codejs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: valueEditor
      })
    })

    const { result } = await response.json()

    return result
}