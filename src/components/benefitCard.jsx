export default function BenefitCard(props) {
  return (
    <div>
      <img src={`../../public/${props.item.image}`} alt={props.item.title} className="benefitImage"/>
      <h3 className="benefitSubheading">{props.item.title}</h3>
      <p className="benefitDescription">{props.item.description}</p>
    </div>
  );
}
