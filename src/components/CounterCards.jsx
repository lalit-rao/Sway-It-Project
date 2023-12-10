import "./CounterCards.css";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {useEffect} from "react";
import {istg, music, twitter, yt} from "../assets/images/index.js";

export default function App() {
    const count1 = useMotionValue(0);
    const count2 = useMotionValue(0);
    const count3 = useMotionValue(0);
    const count4 = useMotionValue(0);
    const rounded1 = useTransform(count1, Math.round);
    const rounded2 = useTransform(count2, Math.round);
    const rounded3 = useTransform(count3, Math.round);
    const rounded4 = useTransform(count4, Math.round);

    useEffect(() => {
        const animation = animate(count1, 9, {duration: 3});
        return animation.stop;
    }, [count1]);
    useEffect(() => {
        const animation = animate(count2, 14, {duration: 3});
        return animation.stop;
    }, [count2]);
    useEffect(() => {
        const animation = animate(count3, 13, {duration: 3});
        return animation.stop;
    }, [count3]);
    useEffect(() => {
        const animation = animate(count4, 9, {duration: 3});
        return animation.stop;
    }, [count4]);

    return (
        <>
            <section id="animated-box">
                <div className="cc-row">
                    <div className="cc-column">
                        <div className="cc-card">
                            <p><i className="fa fa-user fa-lg"></i></p>
                            <div className="cc-card-image">
                                <img src={yt} alt="youtube"/>
                            </div>
                            <p className="cc-card-name">Subscribers</p>
                            <div className="counterCards-text">
                                <motion.h1>{rounded1}</motion.h1>
                                <p className="space">M </p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>

                    <div className="cc-column">
                        <div className="cc-card">
                            <p><i className="fa fa-check fa-lg"></i></p>
                            <div className="cc-card-image">
                                <img src={istg} alt="youtube"/>
                            </div>
                            <p className="cc-card-name">Followers</p>
                            <div className="counterCards-text">
                                <motion.h1>{rounded2}</motion.h1>
                                <p className="space">M </p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>

                    <div className="cc-column">
                        <div className="cc-card">
                            <p><i className="fa-solid fa-store fa-lg"></i></p>
                            <div className="cc-card-image">
                                <img src={twitter} alt="youtube"/>
                            </div>
                            <p className="cc-card-name">Followers</p>
                            <div className="counterCards-text">
                                <motion.h1>{rounded3}</motion.h1>
                                <p className="space">M </p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>

                    <div className="cc-column">
                        <div className="cc-card">
                            <p><i className="fa-solid fa-face-smile fa-lg"></i></p>
                            <div className="cc-card-image">
                                <img src={music} alt="youtube"/>
                            </div>
                            <p className="cc-card-name">Followers</p>
                            <div className="counterCards-text">
                                <motion.h1>{rounded4}</motion.h1>
                                <p className="space">M </p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
