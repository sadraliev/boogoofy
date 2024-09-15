"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Clock } from "lucide-react";

type CommunicationMethod = "email" | "sms" | "telegram" | "whatsapp";

interface Booking {
  date: Date;
  time: string;
  phoneNumber: string;
  communicationMethods: CommunicationMethod[];
  message: string;
}

const communicationOptions: {
  id: CommunicationMethod;
  label: string;
  price: number;
}[] = [
  { id: "email", label: "Email", price: 1 },
  { id: "sms", label: "SMS", price: 2 },
  { id: "telegram", label: "Telegram", price: 1.5 },
  { id: "whatsapp", label: "WhatsApp", price: 1.5 },
];

const presetTimeSlots = ["09:00", "12:00", "15:00", "18:00", "20:00"];

export function BookingDashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [is24HourFormat, setIs24HourFormat] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [communicationMethods, setCommunicationMethods] = useState<
    CommunicationMethod[]
  >([]);
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);

  const handleCommunicationMethodChange = (method: CommunicationMethod) => {
    setCommunicationMethods((prev) =>
      prev.includes(method)
        ? prev.filter((m) => m !== method)
        : [...prev, method]
    );
  };

  const handleBooking = () => {
    if (date && hours && minutes && phoneNumber) {
      const time = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
      const newBooking: Booking = {
        date,
        time,
        phoneNumber,
        communicationMethods,
        message,
      };
      setBookings([...bookings, newBooking]);
      setHours("");
      setMinutes("");
      setPhoneNumber("");
      setCommunicationMethods([]);
      setMessage("");
    }
  };

  const setTime = (time: string) => {
    const [h, m] = time.split(":");
    setHours(h);
    setMinutes(m);
  };

  const formatTime = (h: string, m: string) => {
    if (!h || !m) return "";
    const date = new Date(2000, 0, 1, parseInt(h), parseInt(m));
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !is24HourFormat,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Select Date and Time</CardTitle>
            <CardDescription>
              Choose your preferred date and time for your appointment
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col lg:flex-row gap-4">
            <div className="flex-grow w-full lg:w-1/2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-full h-full"
                styles={{
                  months: { width: "100%" },
                  month: { width: "100%" },
                  caption: { width: "100%" },
                  caption_label: { width: "100%", textAlign: "center" },
                  nav: { width: "100%" },
                  table: { width: "100%" },
                  head_row: { width: "100%" },
                  head_cell: { width: "14.28%", textAlign: "center" },
                  row: { width: "100%" },
                  cell: { width: "14.28%", textAlign: "center" },
                  day: { width: "100%" },
                  nav_button_previous: { position: "absolute", left: "1rem" },
                  nav_button_next: { position: "absolute", right: "1rem" },
                  caption_dropdowns: {
                    display: "flex",
                    justifyContent: "center",
                  },
                }}
              />
            </div>
            <Card className="w-full lg:w-1/2">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="time-format">24-hour format</Label>
                  <Switch
                    id="time-format"
                    checked={is24HourFormat}
                    onCheckedChange={setIs24HourFormat}
                  />
                </div>
                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <Label htmlFor="hours">Hours</Label>
                    <Input
                      id="hours"
                      type="number"
                      min={0}
                      max={is24HourFormat ? 23 : 12}
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      placeholder={is24HourFormat ? "0-23" : "1-12"}
                    />
                  </div>
                  <div className="w-1/2">
                    <Label htmlFor="minutes">Minutes</Label>
                    <Input
                      id="minutes"
                      type="number"
                      min={0}
                      max={59}
                      value={minutes}
                      onChange={(e) => setMinutes(e.target.value)}
                      placeholder="0-59"
                    />
                  </div>
                </div>
                {hours && minutes && (
                  <p className="text-sm text-muted-foreground">
                    Selected time: {formatTime(hours, minutes)}
                  </p>
                )}
                <div>
                  <Label className="mb-2 block">Quick select:</Label>
                  <div className="flex flex-wrap gap-2">
                    {presetTimeSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant="outline"
                        size="sm"
                        onClick={() => setTime(slot)}
                        className={
                          `${hours}:${minutes}` === slot
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        {is24HourFormat ? slot : formatTime(...slot.split(":"))}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
            <CardDescription>
              Provide your contact information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Communication Methods</Label>
              <div className="grid grid-cols-2 gap-2">
                {communicationOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.id}
                      checked={communicationMethods.includes(option.id)}
                      onCheckedChange={() =>
                        handleCommunicationMethodChange(option.id)
                      }
                    />
                    <Label htmlFor={option.id} className="text-sm">
                      {option.label} (${option.price})
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (max 140 characters)</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 140))}
                maxLength={140}
              />
              <p className="text-sm text-muted-foreground">
                {message.length}/140 characters
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleBooking}
              disabled={!date || !hours || !minutes || !phoneNumber}
              className="w-full"
            >
              Book Appointment
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current Bookings</CardTitle>
          <CardDescription>Your scheduled appointments</CardDescription>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <p className="text-muted-foreground">No bookings yet.</p>
          ) : (
            <ul className="space-y-4">
              {bookings.map((booking, index) => (
                <li key={index} className="bg-secondary p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">
                      {booking.date.toDateString()} at {booking.time}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Phone: {booking.phoneNumber}
                    </span>
                  </div>
                  <div className="text-sm">
                    <p>
                      Communication:{" "}
                      {booking.communicationMethods.join(", ") ||
                        "None selected"}
                    </p>
                    <p className="mt-1">
                      Message: {booking.message || "No message"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
