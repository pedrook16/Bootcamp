import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class WelcomeMail {
  get key() {
    return 'WelcomeMail';
  }

  async handle({ data }) {
    const {
      name,
      email,
      start_date,
      end_date,
      planTitle,
      price,
    } = data;

    await Mail.sendMail({
      to: email,
      subject: `Matrícula concluída`,
      template: 'welcome',
      context: {
        student: name,
        title: planTitle,
        start: format(parseISO(start_date), "'Dia' dd 'de' MMMM' de 'yyyy", {
          locale: pt,
        }),
        end: format(parseISO(end_date), "'Dia' dd 'de' MMMM' de 'yyyy", {
          locale: pt,
        }),
        price: price.toFixed(2),
      },
    });
  }
}

export default new WelcomeMail();