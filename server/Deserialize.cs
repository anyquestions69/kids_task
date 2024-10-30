using System.Xml.Serialization;
using System.Text;
using System.Xml;
public class UnsafeXmlDeserializer
{
    public static void DeserializeUnsafeXml(string xmlString)
    {
        XmlSerializer serializer = new XmlSerializer(typeof(SafeObject));
        
        using (MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(xmlString)))
        {
            XmlReaderSettings settings = new XmlReaderSettings();
            settings.DtdProcessing = DtdProcessing.Parse;
            SafeObject obj = (SafeObject)serializer.Deserialize(ms);
            
            // Использование десериализованного объекта
            Console.WriteLine(obj.User);
        }
    }
}

[XmlRoot(ElementName = "Issue")]
public class SafeObject
{
    [XmlElement(ElementName = "User")]
    public string User { get; set; }
}