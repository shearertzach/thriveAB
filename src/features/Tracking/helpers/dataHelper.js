export const organizeData = (dataArrayOne, dataArrayTwo, dataArrayThree) => {
  const arrayOne = []
  const arrayTwo = []
  const arrayThree = []
  dataArrayOne.map((data) => {
    data.day = 1
    arrayOne.push(data)
  })
  dataArrayTwo.map((data) => {
    data.day = 2
    arrayTwo.push(data)
  })
  dataArrayOne.map((data) => {
    data.day = 3
    arrayThree.push(data)
  })
  const questionOne = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const questionTwo = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const questionThree = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const questionFour = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const questionFive = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const questionSix = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const questionSeven = arrayOne.splice(0, 1).concat(arrayTwo.splice(0, 1)).concat(arrayThree.splice(0, 1))
  const constructedArray = []
  constructedArray.push()
  questionOne.forEach((question) => {

  })
}