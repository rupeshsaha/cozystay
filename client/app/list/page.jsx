"use client";
import DatePicker from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export default function CreateListingForm() {
  const [formData, setFormData] = useState({
    title: "",
    availableDates: [],
    address: "",
    requirements: "",
    rate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rate" ? Number(value) : value,
    });
  };

  const handleDateChange = useCallback((dates) => {
    setFormData((prev) => ({
      ...prev,
      availableDates: dates.map((date) => ({
        startDate: new Date(date.startDate).toISOString().split("T")[0], 
        endDate: new Date(date.endDate).toISOString().split("T")[0], 
      })),
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/listing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setFormData({
          title: "",
          availableDates: [],
          address: "",
          requirements: "",
          rate: 0,
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error while submitting form");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Create Property Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Dates
          </label>
          <DatePicker onDateChange={handleDateChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rate per night (in INR)
          </label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            min={0}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Requirements
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            rows="3"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting && <Loader2 className="animate-spin mr-2" />}
            Create Listing
          </Button>
        </div>
      </form>
    </div>
  );
}
