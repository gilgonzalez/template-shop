
'use client'
import Title from '@/components/ui/title/Title';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import './style.css'

export default function NamePage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">


          <div className="flex flex-col mb-2">
            <span>Nombres</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Apellidos</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Dirección</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Dirección 2 (opcional)</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>


          <div className="flex flex-col mb-2">
            <span>Código postal</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Ciudad</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>País</span>
            <select 
              className="p-2 border rounded-md bg-gray-200"
            >
              <option value="">[ Seleccione ]</option>
              <option value="CRI">Costa Rica</option>
              <option selected value="ES">España</option>
           
            </select>
          </div>
          

          <div className="flex flex-col mb-2 ">
          <span>Teléfono</span>
          <PhoneInput
            placeholder="Enter phone number"
            value={'234234234'}
            country={'ES'}
            defaultCountry='ES'
            international
            withCountryCallingCode
            className='p-2 border rounded-md bg-gray-200 phone-input focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500' // Aplicando clase personalizada
            onChange={()=>{console.log('change')}}/>
          </div>



          <div className="flex flex-col mb-2 sm:mt-10">
            <Link 
              href='/checkout'
              className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Siguiente
            </Link>
          </div>


        </div>

      </div>




    </div>
  );
}