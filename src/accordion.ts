import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'
import * as d3 from 'd3'

d3.csv('/data/domain-rent-a-car.csv').then((data) => {
  console.log(data)

  const groupedData = d3.group(data, (d) => d.target)
  const uniqueTargets = Array.from(groupedData.keys())

  const groupedValues = uniqueTargets.map((d: any) => {
    console.log(groupedData.get(d))
  })

  const first50 = Array.from(new Set(data.filter((_d: any, i: any) => i <= 49)))

  const accordion = d3
    .select('.accordion')
    .style('height', '800px')
    .style('overflow', 'auto')

  let isActive = true

  first50.map((d, i) => {
    accordion.append('div').attr('class', 'ac').html(`<h2 class="ac-header">
      <button class="ac-trigger">
      <div class='flex gap-24 items-center mt-2'>
      <div> 
       ${i + 1}
      </div>
      <div class='font-normal flex-1'> ${d.target.split('.')[0]}</div>
      <div> Seo score</div>
      <div class='px-2 py-1 flex gap-3 items-center font-normal text-base border-2 rounded-xl ${
        isActive
          ? 'bg-[#29CFA8] text-white border-none'
          : 'bg-white text-black border-[#D9D9D9]'
      } '> 
      <div> More Details </div>

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53981 14.2091L10.3659 12.3831L15.5317 17.5489L20.6988 12.3831L22.5249 14.2091L15.5316 21.2024L8.53981 14.2091Z" fill="#101827"/>
</svg>
  
      </div>
      </button>
    </h2> 
      <div class="ac-panel flex gap-20 text-black items-center">
        <div class='flex gap-1 items-center'> 
        <div class='text-sm'> LCP </div>
        <img src='/public/black-info.svg' />
        </div>

         <div class='flex gap-1 items-center'> 
        <div class='text-sm'> CLS </div>
        <img src='/public/black-info.svg' />
        </div>

           <div class='flex gap-1 items-center'> 
        <div class='text-sm'> INP </div>
        <img src='/public/black-info.svg' />
        </div>

    </div>
    `)
  })

  new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
  })
})
