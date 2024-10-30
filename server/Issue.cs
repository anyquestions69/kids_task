using System.Xml;
public class Issue
{
    public string user="";
    public string message="";
    public Issue(string text){
        XmlDocument parser = new XmlDocument();
        parser.XmlResolver = new XmlUrlResolver();
        parser.LoadXml(text);
        XmlElement? xRoot = parser.DocumentElement;
        if (xRoot != null)
        {
            foreach (XmlElement xnode in xRoot)
            {
                if(xnode.Name=="user"){
                    user=xnode.InnerText;
                }else if(xnode.Name=="message"){
                    message=xnode.InnerText;
                }
                
            }
        }
    }
}
