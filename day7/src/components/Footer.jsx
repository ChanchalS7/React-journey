//Footer component for footer section
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			Created By
			<i class="fa-solid fa-heart"></i>
			<a href="https://linkedin.com/in/chanchals7" target="_blank">Chanchal Verma</a>
			<i class="fa-solid fa-copyright"></i>{year}
			<strong>Food <span>Fire</span></strong>
		</div>
	)
}

export default Footer;