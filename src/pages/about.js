import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from '../components/AnimatedText';
import LayOut from '../components/Layout';
import Image from "next/image";
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skill";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TransitionEffect from '../components/TransitionEffect';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        } 

       
    },[isInView, value, motionValue])
    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed();
            }
        })
       
    },[springValue,value])
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description"/>
            </Head>
            <TransitionEffect />

            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <LayOut className="pt-16">
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-16'/>
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className='font-medium'> 
                                Chào mọi người, tôi là một người đam mê IT và hiện tại đang nắm bắt cơ hội học tập để phát triển sự nghiệp. Tôi vừa mới hoàn thành chương trình thạc sĩ và đang tìm kiếm cơ hội để áp dụng kiến thức của mình. Ngoài ra, tôi cũng có niềm đam mê với rap và thỉnh thoảng sáng tác những bài nhạc. Bóng đá cũng là một trong những sở thích mà tôi dành thời gian để thư giãn và thưởng thức.
                            </p>
                            <p className='my-4 font-medium'>
                                Chào cả nhà, tôi là một người đơn giản với niềm đam mê về công nghệ thông tin. Vừa mới hoàn thành chương trình thạc sĩ, tôi đang trải qua hành trình tìm hiểu và phát triển kỹ năng trong lĩnh vực IT. Ngoài công việc, tôi thích thú với việc sáng tạo những giai điệu rap và theo dõi các sự kiện bóng đá để giải trí.
                            </p>
                            <p className='font-medium'>
                                Xin chào mọi người, tôi là một người yêu thích IT và hiện đang tập trung vào việc học hỏi và phát triển bản thân trong lĩnh vực này. Với tấm bằng thạc sĩ vừa mới đạt được, tôi đang tìm kiếm cơ hội để áp dụng kiến thức vào thực tế. Ngoài công việc, tôi thích thú với âm nhạc rap và thường xuyên tận hưởng những trận đấu bóng đá để thư giãn.
                            </p>

                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
                            <div className="absoulute top-0  -right-3 -z-10  w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light">
                                <Image src={profilePic} alt='Code' className="w-full h-auto rounded-2xl"/>

                            </div>
                           
                    </div>
                    <div className="col-span-2 flex flex-col items-end justify-between"> 
                                <div className="flex flex-col items-end justify-center">
                                    <span className="inline-block text-7xl font-bold">
                                        <AnimatedNumbers value={50}/>+
                                    </span>
                                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                        satisfied clients
                                    </h2>
                                </div>
                                <div className="flex flex-col items-end justify-center">
                                    <span className="inline-block text-7xl font-bold">
                                        <AnimatedNumbers value={50}/>+
                                    </span>
                                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                        Project Completeds
                                    </h2>
                                </div>
                                <div className="flex flex-col items-end justify-center">
                                    <span className="inline-block text-7xl font-bold">
                                        <AnimatedNumbers value={50}/>+
                                    </span>
                                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                                        Year Of Experiences
                                    </h2>
                                </div>
                    </div>
                    </div>
                  
                <Skills />
                <Experience />
                <Education />
                </LayOut>
            </main>
        </>
    )
}

export default about