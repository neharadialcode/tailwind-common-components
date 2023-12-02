import React from 'react'
import Admedia from '../../assets/images/svg/admedia.svg'
import Adsupply from '../../assets/images/svg/adsupply.svg'
import Honey from '../../assets/images/svg/honey.svg'
import Triffic from '../../assets/images/svg/triffic.svg'
import Welove from '../../assets/images/svg/welove.svg'
const CssSlider = () => {
    return (
        <div class="marquee">
            <div class="marquee__content">
                <ul class="list-inline">
                    <li><img src={Admedia} alt="Admedia" /></li>
                    <li><img src={Adsupply} alt="Adsupply" /></li>
                    <li><img src={Honey} alt="Honey" /></li>
                    <li><img src={Triffic} alt="Triffic" /></li>
                    <li><img src={Welove} alt="Welove" /></li>
                </ul>
                <ul class="list-inline">
                    <li><img src={Admedia} alt="Admedia" /></li>
                    <li><img src={Adsupply} alt="Adsupply" /></li>
                    <li><img src={Honey} alt="Honey" /></li>
                    <li><img src={Triffic} alt="Triffic" /></li>
                    <li><img src={Welove} alt="Welove" /></li>
                </ul>
                <ul class="list-inline">
                    <li><img src={Admedia} alt="Admedia" /></li>
                    <li><img src={Adsupply} alt="Adsupply" /></li>
                    <li><img src={Honey} alt="Honey" /></li>
                    <li><img src={Triffic} alt="Triffic" /></li>
                    <li><img src={Welove} alt="Welove" /></li>
                </ul>
            </div>
        </div>
    )
}

export default CssSlider