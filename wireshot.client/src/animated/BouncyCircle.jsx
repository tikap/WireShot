import React, { useRef, useEffect, useState, useCallback } from "react";
import mojs from "@mojs/core";

export default function BouncyCircle({ duration }) {

    const bouncyCircle = useRef();
    const animDom = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (bouncyCircle.current) return;

        bouncyCircle.current = new mojs.Shape({
            parent: animDom.current,
            shape: "circle",
            fill: { "#FC46AD": "#F64040" },
            radius: { 25: 50 },
            duration: duration,
            isShowStart: true,
            easing: "elastic.inout",
            onStart() {
                setIsAnimating(true);
            },
            onComplete() {
                setIsAnimating(false);
            },
        });
    });

    useEffect(() => {
        if (!bouncyCircle.current) return;

        bouncyCircle.current.tune({ duration: duration });
        bouncyCircle.current.replay();
        isOpen
            ? bouncyCircle.current.replayBackward()
            : bouncyCircle.current.replay();
        setIsOpen(!isOpen);
    }, [duration]);

    const clickHandler = useCallback(() => {
        bouncyCircle.current.play();
        isOpen ? bouncyCircle.current.playBackward() : bouncyCircle.current.play();
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <div ref={animDom} className="MojsExample">
            <button className="button" onClick={clickHandler}>
                {isAnimating && isOpen ? "Animating" : isOpen ? "Close" : "Open"}
            </button>
        </div>
    );
}