/**
 * controller calculate
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

function calculate(req, res) {
  const { name, notes } = req.body
  const validate = notes.some(nota =>  typeof nota.note !== 'number' || nota.note > 5)
  if (validate) return res.send({ error: true, message: "El valor de cada nota no puede ser mayor a 5 y debe ser un tipo número" })

  const sumPercentages = notes.reduce((acc, nota) => acc + nota.percentage, 0)
  if (sumPercentages !== 100 ) return res.send({ error: true, message: "La suma de porcentajes debe ser igual 100%" })

  const definitiva = notes.reduce((acc, nota) => acc + (nota.note * (nota.percentage / 100)), 0)
  return res.send({ error: false, message: `La nota definitiva de la materia ${name} es: ${definitiva}` })
}

module.exports = {
  calculate
}
