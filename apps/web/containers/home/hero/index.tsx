"use client";
import { FC } from "react";
import classes from "./index.module.scss";
import Image from "next/image";

export const Hero: FC = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.hero__title__wrapper}>
        <div>Wanna get the job?</div>
        <div className={classes.message}>
          Build a <span className={classes.blue}>Bright</span> resume
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
      <div className={classes.hero__image}>
        <div className={classes.imageCombo}>
          <div className={classes.imageCombo__image}>
            <Image
              src="/assets/image/sample-1.png"
              alt="Hero image"
              fill
              typeof="svg"
              sizes="100%"
              style={{ zIndex: "1" }}
            />
          </div>
          <div className={classes.imageCombo__image}>
            <Image
              src="/assets/image/sample-2.png"
              alt="Hero image"
              fill
              typeof="svg"
              sizes="100%"
              style={{ zIndex: "2" }}
            />
          </div>
          <div className={classes.imageCombo__image}>
            <Image
              src="/assets/image/sample-3.png"
              alt="Hero image"
              fill
              typeof="svg"
              sizes="100%"
              style={{ zIndex: "3" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
