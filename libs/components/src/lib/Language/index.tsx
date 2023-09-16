import React, { FC } from "react";

// components
import { RadioButton, TextField } from "@bright-resume/components";

// icons
import { AddCircleRoundedIcon, RemoveCircleRounded } from "../Icons";
// types
import {
  LanguageChildProps,
  LanguageProps,
  ProficiencyEnum,
} from "../types/index.type";
import Typography from "../Typography";
// locals
import classes from "./index.module.scss";
import { texts } from "./texts";

export const Language: FC<LanguageProps> = ({
  items = [],
  onDecrease,
  onIncrease,
}) => {
  const renderHeader = () => {
    return (
      <div className={classes.title__wrapper}>
        <Typography className={classes.header} variant="h2">
          {texts.languages}
        </Typography>
        <div className={classes.add__icon} onClick={onIncrease}>
          <AddCircleRoundedIcon />
          <Typography className={classes.add__text} variant="h7">
            {texts.add}
          </Typography>
        </div>
      </div>
    );
  };

  const renderItem = (item: LanguageChildProps) => {
    return (
      <div key={item.id} className={classes.wrapper__items}>
        <div className={classes.language__container}>
          <TextField
            rootClassName={classes.language}
            {...item.language}
            variant="h4"
          />
          <RemoveCircleRounded
            className={classes.remove__icon}
            onClick={() => onDecrease(item.id)}
          />
        </div>
        <Typography className={classes.proficiency__value} variant="h9">
          {item.proficiency}
        </Typography>
        <div className={classes.proficiency__wrapper}>
          {Object.values(ProficiencyEnum).map((proficiency) => (
            <div key={`level-${proficiency}`} className={classes.proficiency}>
              <RadioButton
                value={proficiency}
                checked={item.proficiency === proficiency}
                onChange={(e) =>
                  e.target.checked &&
                  item.onChangeProficiency(item.id, proficiency)
                }
              >
                {proficiency}
              </RadioButton>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderItems = () => {
    return <div>{items.map((item) => renderItem(item))}</div>;
  };

  return (
    <div className={classes.wrapper}>
      {renderHeader()}
      {renderItems()}
    </div>
  );
};
