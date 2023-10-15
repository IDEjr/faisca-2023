import styles from  './services.module.css'
import Service from './Service'

function Services(){
    return(
        <div className={styles.services}>
            <p>NOSSOS SERVIÇOS</p>
            <Service servico="IDENTIDADE VISUAL"/>
            <Service servico="DESIGN DE PRODUTO"/>
            <Service servico="EMBALAGEM"/>
            <Service servico="EDITORIAL"/>
            <Service servico="DESIGN DE INTERFACES"/>
            <Service servico="DESIGN DE JOGOS"/>
            <Service servico="DESIGN DE SERVIÇOS"/>
        </div>
    )

}
export default Services