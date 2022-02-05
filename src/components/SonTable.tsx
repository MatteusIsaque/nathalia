import styles from './../styles/SonTable.module.scss'

type DadTable = {
  colorMonth: any
  TitleTable: string
  Price: number
  MonthTraining: string
  PriceMonth: number
  ColorStrong: any
  Vantagem1: string
  Vantagem2: string
  Vantagem3: string
  Vantagem4: string
  Vantagem5: string
}

export default function SonTable({ colorMonth, TitleTable, Price, PriceMonth, MonthTraining, ColorStrong, Vantagem1, Vantagem2, Vantagem3, Vantagem4, Vantagem5 }: DadTable) {

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th className={styles.TitleTable}>{TitleTable}</th>
        </tr>
      </thead>
      <tbody className={styles.Tboody}>
        <tr>
          <th className={styles.priceEmphasis}>
            R$
            <span>
              {Price}
            </span>
            ,00<text style={{ color: colorMonth }}>/MÊS</text>
          </th>
        </tr>
        <tr className={styles.Tr}>
          <th>
            {MonthTraining}
          </th>
          <th>
            R${PriceMonth}.00
          </th>
        </tr>
      </tbody>
      <div className={styles.Strong} style={{ backgroundColor: ColorStrong }} />
      <tfoot>
        <tr className={styles.Vantagens}>
          <td>
            {Vantagem1}
          </td>
          <td>
            {Vantagem2}
          </td>
          <td>
            {Vantagem3}
          </td>
          <td>
            {Vantagem4}
          </td>
          <td>
            {Vantagem5}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}