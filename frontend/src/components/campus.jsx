import { Input } from "./ui/input";
function CampusPage() {
  return <div>
    <h2 className="text-4xl font-bold mb-6">Campus Selection</h2>
    <p className="text-lg">Select your campus to explore available hostels and accommodations.</p>
    <Input type='search' list='search-options'/>
      <datalist id="search-options">
    <option value="university_of_nairobi">University of Nairobi</option>
    <option value="moi_university">Moi University</option>
    <option value="kenyatta_university">Kenyatta University</option>
    <option value="jkuat">Jomo Kenyatta University of Agriculture and Technology (JKUAT)</option>
    <option value="egerton_university">Egerton University</option>
    <option value="maseno_university">Maseno University</option>
    <option value="masinde_muliro">Masinde Muliro University of Science and Technology</option>
    <option value="kabarak_university">Kabarak University</option>
    <option value="karatina_university">Karatina University</option>
    <option value="laikipia_university">Laikipia University</option>
    <option value="kisii_university">Kisii University</option>
    <option value="chuka_university">Chuka University</option>
    <option value="garissa_university">Garissa University</option>
    <option value="turkana_university">Turkana University</option>
    <option value="wajir_university">Wajir University</option>
    <option value="kibabii_university">Kibabii University</option>
    <option value="karatina_university">Karatina University</option>
    <option value="kuccps_other_public_1">(other public - see KUCCPS list)</option>
  </datalist>
    
  </div>;
}
export default CampusPage;