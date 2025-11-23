# WorkSpace Frontend

A Next.js App Router application for managing products, content, and collaboration within the WorkMe ecosystem.

## 🎯 Purpose

WorkSpace is a collaboration container where users:
- Manage products (content/assets) in draft and published states
- View published versions grouped by channel (social, signage, website)
- Access and manage Company Source Library items
- Build new products through an Asana-style workflow
- Communicate via messaging

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/app
  /components          # Shared UI components
  /lib                 # Mock data and utilities
  /workspace           # Workspace routes
    /messages          # Messaging feed
    /products          # Products to build
    /published         # Published products
    /library           # Company Source Library
    /build             # Product builder wizard
    /products/[id]     # Product detail view
  page.tsx             # Welcome screen
  layout.tsx           # Root layout
```

## 🧱 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Lucide React** (Icons)

## 📝 Current Status

This is a **frontend-only scaffolding** with:
- ✅ All routes and navigation
- ✅ Mock data simulation
- ✅ Component library
- ✅ Product builder wizard
- ⏳ No authentication (to be added)
- ⏳ No backend integration (to be added)

## 🎨 Features

- **Welcome Screen**: Entry point to WorkSpace
- **Workspace Dashboard**: Overview of products, published items, and library
- **Messaging**: Simple message feed with local state
- **Products Management**: View and manage draft products
- **Published Products**: View published items by channel
- **Source Library**: Manage company-wide building blocks
- **Product Builder**: Multi-step wizard for creating products

## 🔄 Next Steps

1. Integrate with WorkMe database schema
2. Add Firebase authentication
3. Wire up backend API endpoints
4. Implement real file uploads
5. Add user permissions and workspace membership

