import React from "react";
import './InfoToolTip.css'
import usePopupClose from '../../hooks/usePopupClose';

export default function InfoToolTip({ infoToolTip, onClose }) {

    usePopupClose(infoToolTip.isOpen, onClose);

    return (
        <>
            {infoToolTip.isOpen ? (
                <div className="infoToolTip">
                    <div className="infoToolTip__container">
                        <button type="button" className="infoToolTip__close-button" onClick={onClose} />
                        <div className={`infoToolTip__image-container ${infoToolTip.isSuccess ? "infoToolTip__image-container_type_ok" : "infoToolTip__image-container_type_fail"}`}></div>
                        <h2 className="infoToolTip__text">
                            {infoToolTip.text}
                        </h2>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}