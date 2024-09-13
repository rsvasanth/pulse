// import React from 'react';

// const Dashboard: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p className="text-gray-700">Welcome to your dashboard! Here you can find an overview of your recent activities and updates.</p>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-blue-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Task 1</h2>
//           <p className="text-gray-600">Details about task 1.</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Task 2</h2>
//           <p className="text-gray-600">Details about task 2.</p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold">Task 3</h2>
//           <p className="text-gray-600">Details about task 3.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import * as React from "react"

import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
         
         
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          {/* Add your main content here */}
          <div className="mb-4">
          <h1 className="text-2xl font-bold">Top Down Project <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">EDITING</span></h1>
          <Tabs defaultValue="planner">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="planner">Planner</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        </main>
      </div>
    </div>
  )
}
