
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzoiwqspsqbznujpnhxp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6b2l3cXNwc3Fiem51anBuaHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTM0MzQsImV4cCI6MjA2OTM4OTQzNH0.TjuNHAN6OqXBu4ns-vknjAukpb2vPHiQkQaZ1N0VNYc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function MoyTrenerApp() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  async function fetchTrainers() {
    const { data, error } = await supabase.from("trainers").select();
    if (!error) setTrainers(data);
  }

  return (
    <div style={{ padding: 20 }}>
      {trainers.map((trainer) => (
        <div key={trainer.id} style={{ border: "1px solid #ccc", borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <h2>{trainer.name}</h2>
          <p>🏙 Город: {trainer.city}</p>
          <p>🎯 Цели: {trainer.goals}</p>
          <p>💸 Бюджет: от {trainer.price} ₸</p>
          <p>📞 WhatsApp: {trainer.whatsapp}</p>
          {trainer.telegram && <p>✈️ Telegram: {trainer.telegram}</p>}
          <button style={{ marginTop: 10 }}>Связаться</button>
        </div>
      ))}
    </div>
  );
}
