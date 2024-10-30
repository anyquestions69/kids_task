using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Xml;
using System.Xml.Serialization;
var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls("http://localhost:6969");

var app = builder.Build();
app.UseWebSockets();
app.Map("/ws", async context => {
    if (context.WebSockets.IsWebSocketRequest)
    {
        using var ws = await context.WebSockets.AcceptWebSocketAsync();
        await ReceiveMessage(ws);
    }
    else
    {
        context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
    }
});
async Task ReceiveMessage(WebSocket socket)
{

    while (socket.State == WebSocketState.Open)
    {
        var buffer = new byte[1024 * 4];
        var result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
        string resText = Encoding.UTF8.GetString(buffer);
        UnsafeXmlDeserializer.DeserializeUnsafeXml(resText);
        var bytes = Encoding.UTF8.GetBytes("Спасибо за Вашу обратную связь! Мы пришлем ответ Вам на почту!");
        await socket.SendAsync(bytes,
                                    WebSocketMessageType.Text,
                                    true,
                                    CancellationToken.None);
                                    

    }
}
await app.RunAsync();

// void ParseXml(string text){
//     Issue issue= new Issue(text);
//     using (StreamWriter outputFile = new StreamWriter(Path.Combine("./issues/", $"{issue.user}.txt")))
//     {
//         outputFile.WriteLine($"{issue.user} - {issue.message}");
//     }
// }


