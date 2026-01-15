import React from 'react'
import withAuthHOC from '../../utils/HOC/withAuthHOC';

const History = () => {
  return (
    <div className="flex-[0.8] h-screen overflow-auto p-12.5 bg-[whitesmoke] box-border">
      <div  className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        <div className="w-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border">
          <div className="text-[34px] text-center">80%</div>
          <h2 className='text-center text-[30px]'>Frontend developer</h2>
          <p className='py-5'>Resume Name: Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic consectetur rerum delectus totam ut libero tempore? Debitis sint illo sit, sunt in facilis eos delectus asperiores sapiente, ea quidem saepe. Quae, quas fugiat. Reiciendis ea voluptas non maxime nisi est reprehenderit accusamus dicta consectetur, delectus ad sequi tempore quis.</p>
          <p className='py-5'>Date:2025-11-02</p>
        </div>

        <div className="w-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border">
          <div className="text-[34px] text-center">80%</div>
          <h2 className='text-center text-[30px]'>Frontend developer</h2>
          <p className='py-5'>Resume Name: Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic consectetur rerum delectus totam ut libero tempore? Debitis sint illo sit, sunt in facilis eos delectus asperiores sapiente, ea quidem saepe. Quae, quas fugiat. Reiciendis ea voluptas non maxime nisi est reprehenderit accusamus dicta consectetur, delectus ad sequi tempore quis.</p>
          <p className='py-5'>Date:2025-11-02</p>
        </div>

        <div className="w-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border">
          <div className="text-[34px] text-center">80%</div>
          <h2 className='text-center text-[30px]'>Frontend developer</h2>
          <p className='py-5'>Resume Name: Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic consectetur rerum delectus totam ut libero tempore? Debitis sint illo sit, sunt in facilis eos delectus asperiores sapiente, ea quidem saepe. Quae, quas fugiat. Reiciendis ea voluptas non maxime nisi est reprehenderit accusamus dicta consectetur, delectus ad sequi tempore quis.</p>
          <p className='py-5'>Date:2025-11-02</p>
        </div>

        <div className="w-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border">
          <div className="text-[34px] text-center">80%</div>
          <h2 className='text-center text-[30px]'>Frontend developer</h2>
          <p className='py-5'>Resume Name: Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic consectetur rerum delectus totam ut libero tempore? Debitis sint illo sit, sunt in facilis eos delectus asperiores sapiente, ea quidem saepe. Quae, quas fugiat. Reiciendis ea voluptas non maxime nisi est reprehenderit accusamus dicta consectetur, delectus ad sequi tempore quis.</p>
          <p className='py-5'>Date:2025-11-02</p>
        </div>


        <div className="w-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border">
          <div className="text-[34px] text-center">80%</div>
          <h2 className='text-center text-[30px]'>Frontend developer</h2>
          <p className='py-5'>Resume Name: Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic consectetur rerum delectus totam ut libero tempore? Debitis sint illo sit, sunt in facilis eos delectus asperiores sapiente, ea quidem saepe. Quae, quas fugiat. Reiciendis ea voluptas non maxime nisi est reprehenderit accusamus dicta consectetur, delectus ad sequi tempore quis.</p>
          <p className='py-5'>DAate:2025-11-02</p>
        </div>
      </div>
    </div>
  )
}

export default withAuthHOC(History);
