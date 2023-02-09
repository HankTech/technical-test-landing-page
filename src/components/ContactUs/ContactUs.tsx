import React from 'react'
import {useForm} from 'react-hook-form'

//  types
import {NewsletterTypes} from '@/types'

//  componets
import SectionTitle from '@/components/SectionTitle'

//  hooks
import {useSuscribe} from '@/hooks/useSuscribe'

function ContactUs() {
  const { register, handleSubmit, formState: { errors }} = useForm<NewsletterTypes>({ mode: "onSubmit" })

  const { loading, suscribe } = useSuscribe()
  
  const onSubmit = async (data :NewsletterTypes) => {
    const res = await suscribe(data);
    console.log({res})
  }
  
  return (
    <>
      <SectionTitle title='Contáctanos' />
      <section className='font-OpenSans pb-[5rem] flex flex-col justify-center items-center'>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[50rem]" id="suscribe" noValidate>
          <div className="grid grid-cols-2 gap-6 justify-items-center mb-8">
            <div className='font-bold flex flex-col'>
              <label className='mb-3 uppercase'>Nombre</label>
              <input
                className={errors?.firstname ? 'border-red-700 font-normal text-sm px-5 py-3 h-50 w-[20rem] border focus:outline-none' : 'font-normal text-sm px-5 py-3 h-50 w-[20rem] border border-[#CFCFCF] focus:outline-none focus:border focus:border-[#D8AD3D]'}
                aria-invalid={errors?.firstname ? "true" : "false"}
                {...register("firstname", { required: true })}
              />
              {errors?.firstname?.type === "required" && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  Este campo es requerido
                </p>
              )}
              {errors?.firstname?.message && (
                <p role="alert" className="{styles.errorMessage}">
                  {errors?.firstname.message}
                </p>
              )}
            </div>
            
            <div className='font-bold flex flex-col'> 
              <label className='mb-3 uppercase'>Apellido</label>
              <input
                className={errors?.lastname ? 'border-red-700 font-normal text-sm px-5 py-3 h-50 w-[20rem] border focus:outline-none' : 'font-normal text-sm px-5 py-3 h-50 w-[20rem] border border-[#CFCFCF] focus:outline-none focus:border focus:border-[#D8AD3D]'}
                aria-invalid={errors?.lastname ? "true" : "false"}
                {...register("lastname", { required: true })}
              />
              {errors?.lastname?.type === "required" && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  Este campo es requerido
                </p>
              )}
              {errors?.lastname?.message && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  {errors?.lastname.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 justify-items-center">
            <div className='font-bold flex flex-col'>
              <label className='mb-3 uppercase'>Mail</label>
                <input
                  type="email"
                  className={errors?.email ? 'border-red-700 font-normal text-sm px-5 py-3 h-50 w-[20rem] border focus:outline-none' : 'font-normal text-sm px-5 py-3 h-50 w-[20rem] border border-[#CFCFCF] focus:outline-none focus:border focus:border-[#D8AD3D]'}
                  aria-invalid={errors?.email ? "true" : "false"}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El campo debe ser un email",
                    },
                  })}
                />
              {errors?.email?.type === "required" && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  Este campo es requerido
                </p>
              )}
              {errors?.email?.message && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  {errors?.email.message}
                </p>
              )}
            </div>

            <div className='font-bold flex flex-col'>
              <label className='mb-3 uppercase'>teléfono</label>
              <input
                type="tel"
                className={errors?.phone ? 'border-red-700 font-normal text-sm px-5 py-3 h-50 w-[20rem] border focus:outline-none' : 'font-normal text-sm px-5 py-3 h-50 w-[20rem] border border-[#CFCFCF] focus:outline-none focus:border focus:border-[#D8AD3D]'}
                {...register("phone", {
                  required: true,
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "El campo debe ser un número",
                  },
                })}
              />
              {errors?.phone?.type === "required" && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  Este campo es requerido
                </p>
              )}
              {errors?.phone?.message && (
                <p role="alert" className="text-red-700 text-xs text-center mt-2">
                  {errors?.phone?.message}
                </p>
              )}
            </div>
          </div>
        
          <button form="suscribe" disabled={loading} className='xl:mt-10 ml-auto border rounded-[50px] py-4 px-12 text-white bg-[#D8AD3D] hover:bg-[#009CD9] disabled:bg-[#CFCFCF]'>
            Submit
          </button> 
        </form>
      </section>
    </>
  )
}

export default ContactUs