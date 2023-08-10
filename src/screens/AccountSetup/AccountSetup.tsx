import React from "react";
import { BarsNavBars } from "../../components/BarsNavBars";
import { BarsNavBarsLarge } from "../../components/BarsNavBarsLarge";
import { ControlsButtons } from "../../components/ControlsButtons";
import { ControlsCheckboxes } from "../../components/ControlsCheckboxes";
import { ImageListsImage } from "../../components/ImageListsImage";
import { ViewsProgressBars } from "../../components/ViewsProgressBars";
import { Icon1 } from "../../icons/Icon1";
import "./style.css";

export const AccountSetup = (): JSX.Element => {
  return (
    <div className="account-setup">
      <BarsNavBars
        className="bars-nav-bars-standard"
        divClassName="bars-nav-bars-instance"
        leftAction="icon"
        leftActionWithTitle={false}
        rightAction="icon"
        settings2StyleOverrideClassName="bars-nav-bars-standard-instance"
        text="Step 2"
      />
      <ViewsProgressBars
        className="views-progress-bars-instance"
        fill="fifty"
        indicatorClassName="design-component-instance-node"
      />
      <BarsNavBarsLarge
        caption
        className="bars-nav-bars-large-instance"
        mode="light"
        rightAction="none"
        text="What’s your favorite food?"
        text1="This will help us give you recommendation"
      />
      <div className="frame-3">
        <ImageListsImage text="Chicken" type="category" viewsImagesRatioRatioClassName="image-lists-image-5" />
        <div className="image-lists-image-2">
          <div className="overlap-group">
            <div className="overlay" />
            <ControlsCheckboxes
              className="controls-checkboxes-instance"
              icon5StyleOverrideClassName="controls-checkboxes-2"
              mode="light"
              selected
              state="default"
            />
          </div>
          <div className="asian-2">Burger</div>
        </div>
        <div className="image-lists-image-2">
          <div className="overlap">
            <div className="overlay" />
            <ControlsCheckboxes
              className="controls-checkboxes-instance"
              icon5StyleOverrideClassName="controls-checkboxes-2"
              mode="light"
              selected
              state="default"
            />
          </div>
          <div className="asian-2">Healthy Food</div>
        </div>
        <ImageListsImage text="Pizza" type="category" viewsImagesRatioRatioClassName="image-lists-image-list-item" />
        <ImageListsImage text="Ramen" type="category" viewsImagesRatioRatioClassName="image-lists-image-instance" />
        <ImageListsImage
          text="Chicken"
          type="category"
          viewsImagesRatioRatioClassName="image-lists-image-list-item-instance"
        />
        <ImageListsImage text="Ramen" type="category" viewsImagesRatioRatioClassName="image-lists-image-3" />
        <ImageListsImage text="Chicken" type="category" viewsImagesRatioRatioClassName="image-lists-image-4" />
        <ImageListsImage text="Ramen" type="category" viewsImagesRatioRatioClassName="image-lists-image-instance" />
        <ImageListsImage
          text="Chicken"
          type="category"
          viewsImagesRatioRatioClassName="image-lists-image-list-item-instance"
        />
        <ImageListsImage text="Ramen" type="category" viewsImagesRatioRatioClassName="image-lists-image-3" />
        <ImageListsImage text="Chicken" type="category" viewsImagesRatioRatioClassName="image-lists-image-5" />
      </div>
      <ControlsButtons
        className="controls-buttons-2"
        icon
        iconPosition="right"
        mode="light"
        override={<Icon1 className="icon-1" color="white" />}
        size="block"
        state="default"
        text="2 selected"
        textClassName="controls-buttons-3"
        textPosition="center"
        type="primary"
      />
    </div>
  );
};
