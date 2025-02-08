import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'
import * as d3 from 'd3'

d3.csv('/data/domain-rent-a-car.csv').then((data) => {
  console.log(data)

  const groupedData = d3.group(data, (d) => d.target)
  
  const updatedData = data.map((d) => {
    
  })


  console.log(groupedData)
  const first50 = Array.from(new Set(data.filter((_d: any, i: any) => i <= 49)))


  const accordion = d3.select('.accordion')

  first50.map((d) => {
    accordion.append('div').attr('class', 'ac').html(`<h2 class="ac-header">
      <button class="ac-trigger">
      <div class='flex gap-36 items-center mt-6'>
      <div> 
       1
      </div>
      <div class='font-normal'> ${d.target.split('.')[0]}</div>
      <div> Seo score</div>
      <button> Close </button>
      </div>
      </button>
    </h2> 
       <div class="ac-panel">
      <p>Content for section 1</p>
    </div>
    `)
  })

  new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
  })
})
