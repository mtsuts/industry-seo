import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'
import * as d3 from 'd3'

Promise.all([
  d3.csv('/data/domain-rent-a-car.csv'),
  d3.csv('/data/lighthouse-rent-a-car.csv'),
]).then(
  ([data, lighthouse]: [d3.DSVRowArray<string>, d3.DSVRowArray<string>]) => {
    const groupedData = d3.group(data, (d) => d.target)
    const uniqueTargets = Array.from(groupedData.keys()).filter(
      (d, i) => i <= 49
    )

    // Round values
    const roundedValue = d3.format('.1f')

    const first50 = Array.from(
      new Set(data.filter((_d: any, i: any) => i <= 49))
    )

    const accordion = d3
      .select('.accordion')
      .style('height', '800px')
      .style('overflow', 'auto')

    let isActive = true

    uniqueTargets.map((d, i) => {
      const foundData =
        lighthouse.find((x) => x['target domain'].includes(d)) || {}

      if (foundData.LCP) {
        accordion.append('div').attr('class', 'ac').html(`<h2 class="ac-header">
          <button class="ac-trigger">
          <div class='flex gap-20 items-center mt-2'>
          <div> 
           ${i + 1}
          </div>
          <div class='font-normal flex-1 text-center'> ${
            foundData ? d.split('.')[0] : ''
          } </div>
          <div> Seo score</div>
          <div class='px-2 py-1 flex gap-3 items-center font-normal text-base border-2 rounded-xl ${
            isActive
              ? 'bg-white text-black border-[#D9D9D9]'
              : 'bg-[#29CFA8] text-white border-none'
          } '> 
          ${isActive ? '<div> More Details </div>' : '<div> Close Details </div>'}
      
    
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 31 31" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53981 14.2091L10.3659 12.3831L15.5317 17.5489L20.6988 12.3831L22.5249 14.2091L15.5316 21.2024L8.53981 14.2091Z" fill="#101827"/>
    </svg>
      
          </div>
          </button>
        </h2> 
          <div class="ac-panel flex gap-20 text-black items-center mt-4">
            <div class='flex gap-1 items-center'> 
            <div class='text-sm'> LCP </div>
            <img src='/public/black-info.svg' />
            <div> ${roundedValue(Number(foundData.LCP) / 1000)} </div>
            </div>
    
             <div class='flex gap-1 items-center'> 
            <div class='text-sm'> CLS </div>
            <img src='/public/black-info.svg' />
             <div> ${roundedValue(Number(foundData.CLS))} </div>
            </div>
    
             <div class='flex gap-1 items-center'> 
            <div class='text-sm'> FID </div>
            <img src='/public/black-info.svg' />
             <div> ${Math.round(Number(foundData.FID))} </div>
            </div>
        </div>
        `)
      }
    })

    // <div class='flex gap-1 items-center'>
    // <div class='text-sm'> OSI </div>
    // <img src='/public/black-info.svg' />
    //  <div> ${foundData.OSI} </div>
    // </div>

    new Accordion('.accordion', {
      duration: 300,
      showMultiple: false,
    })
  }
)
