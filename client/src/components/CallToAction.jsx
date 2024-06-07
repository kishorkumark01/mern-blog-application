import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-slate-700">
   <div class="container mx-auto">
      <div class="flex flex-wrap justify-center -mx-4">
         <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
               <span class="block mb-2 text-lg font-semibold text-primary text-cyan-500">
               Our Blogs
               </span>
               <h2
                  class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white"
                  >
                  Our Recent News
               </h2>
               <p class="text-base text-body-color dark:text-dark-6">
                  There are many articles which gets updated daily. Which can be seen below in recent articles.
               </p>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
  )
}