import * as d3 from 'd3'
import { drawCirclesProps } from '../types'

const drawCircles = ({ header, title, color, number }: drawCirclesProps) => {
  const container = d3.select('#circles') // Use d3 selection
  container
    .append('div')
    .style('color', `${color}`)
    .style('font-size', '20px')
    .html(
      `<div class='flex gap-2'> 
      <div>${header} </div> 
<img title='test' class='cursor-pointer' src='/public/info.svg' alt='info-icon' />
 </div>`
    )
    .append('div').html(`
<svg xmlns="http://www.w3.org/2000/svg" width="162" class='mt-6' height="162" viewBox="0 0 162 162" fill="none">

<mask id="mask0_2007_667" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="162" height="162">
  <path d="M0 0H81V81H162V162H0V0Z" fill=${color}>
</mask>
<g width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="81" cy="81" r="77" stroke="#F5F5F5" stroke-width="8"/>
</g>
<g mask="url(#mask0_2007_667)">
  <path d="M158 81C158 123.526 123.526 158 81 158C38.4741 158 4 123.526 4 81C4 38.4741 38.4741 4 81 4C104.259 4 125.107 14.308 139.232 30.6186C150.928 44.1245 158 61.7313 158 81Z" stroke=${color} stroke-width="8"/>
</g>
<text x="80" y="90" font-size="40px" text-anchor="middle" fill="white">${number}</text>
</svg>`)

}

export default drawCircles
