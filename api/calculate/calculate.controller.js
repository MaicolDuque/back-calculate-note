/**
 * controller calculate
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

function calculate(req, res) {
  const { name, notas } = req.body
  const validate = notas.some(nota =>  typeof nota.value !== 'number' || nota.value > 5)
  const sumPercentages = notas.reduce((acc, nota) => acc + nota.percentage, 0)
  if (validate) return res.send({ error: true, message: "El valor de cada nota no puede ser mayor a 5 y debe ser un tipo número" })
  if (sumPercentages > 100) return res.send({ error: true, message: "La suma de porcentajes debe ser menor a 100" })

  const definitiva = notas.reduce((acc, nota) => acc + (nota.value * (nota.percentage / 100)), 0)
  return res.send({ error: false, message: `La nota definitiva de la materia ${name} es: ${definitiva}` })
}

module.exports = {
  calculate
}
