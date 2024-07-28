import type { Size } from '@/interfaces';
import { cn } from '@/utils/cn';


interface Props {
  selectedSize:Size;
  availableSizes: Size[];

}

export const SizeSelector = ({selectedSize, availableSizes}: Props) => {


  return (
    <div className="my-5">
      <h3 className='font-bold mb-4'>Tallas disponibles</h3>
      <div className="flex">
        {
          availableSizes.map((size, index) => {
            return (
              <button 
                key={index} 
                className={cn("hover:text-white hover:bg-sky-500 rounded-md py-1 mr-2",
                  selectedSize === size && "bg-sky-500 text-white",
                  size.length > 1 && "px-2",
                  size.length < 2 && "px-3.5"
                )}>
                {size}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}
