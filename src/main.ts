import './style.css'
import { drawCirclesProps } from '../types'
import drawCircles from './circles'

const data: drawCirclesProps[] = [
  {
    header: 'Avg. page total',
    title: 'The total number of pages ranked on Google per business',
    color: '#29CFA8',
    number: '1.2m',
  },
  {
    header: 'Avg. Ranking Terms',
    title: 'The total number of pages ranked on Google per business',
    color: '#9170CC',
    number: "500",
  },
  {
    header: 'Avg. Link total',
    title: 'The total number of pages ranked on Google per business',
    color: '#F9BF18',
    number: "2.3K",
  },
]

data.map((d) => {
  drawCircles(d)
})