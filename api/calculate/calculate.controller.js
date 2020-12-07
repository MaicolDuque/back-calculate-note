/**
 * controller calculate
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

function calculate(req, res) {
  const { name, notas } = req.body
  const sumPercentages = notas.reduce((acc, nota) => acc + nota.percentage, 0)
  if (sumPercentages > 100) {
    return res.send({ error: true, message: "La suma de porcentajes debe ser menor a 100" })
  }
  const definitiva = notas.reduce((acc, nota) => acc + (nota.value * (nota.percentage / 100)), 0)
  return res.send({ error: false, message: `La nota definitiva de la materia ${name} es: ${definitiva}` })
}

module.exports = {
  calculate
}
