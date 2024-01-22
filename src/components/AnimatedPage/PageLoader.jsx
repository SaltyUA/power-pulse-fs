import { LoaderWrapper, QloaderSvg } from "./PageLoader.styled"
import sprite from '../../assets/images/sprite.svg'

export const PageLoader = () => {

    return (
        <LoaderWrapper>
            <QloaderSvg>
                <use href={sprite + '#icon-logo2'}></use>
            </QloaderSvg>
        </LoaderWrapper>
    )
}