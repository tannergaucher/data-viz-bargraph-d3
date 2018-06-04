let dataset = [];

let myRequest = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"

fetch(myRequest)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong...');
    }
  })
  .then(response => {
    response.data.forEach(obj => dataset.push([obj[0], obj[1]]))
      plot()
    //console.table(dataset)
  })

let plot = () => {
 
  const w = 900;
  const h = 460;
  // const w = 1000
  // const h = 200
  //const padding = 30;
  
  const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
                
  const yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (d) => d[1])])
                .range([0, h])
                
  const xScale = d3.scaleLinear()
                .domain([0, dataset.length])
                .range([0, w])
  

  svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect") 
  .attr("x", (d, i) => {
    return xScale(i)
  })
  .attr("y", (d, i) => {
    return h - yScale(d[1])
  })
  .attr("width", xScale(2))
  .attr("height", (d, i) => {
    //return d[1] 
    return yScale(d[1])
  })

}
  
  
  
  




