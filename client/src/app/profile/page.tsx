"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Shield, Award, Calendar, LogOut, Activity } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 space-y-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 pb-6 border-b border-white/10"
      >
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
            <div className="h-full w-full rounded-full bg-surface border-4 border-black overflow-hidden relative">
                 {/* Placeholder Avatar */}
                 <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-muted-foreground" />
            </div>
        </div>
        <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">Head Scout</h1>
            <p className="text-muted-foreground">Lead Analyst • Manchester City FC</p>
            <div className="flex gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Pro License</Badge>
                <Badge variant="outline" className="bg-white/5 text-muted-foreground">Admin</Badge>
            </div>
        </div>
        <Button variant="outline" className="border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-500">
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
          {/* Personal Info */}
          <Card className="bg-surface border-white/10">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" /> Personal Information
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="grid gap-1">
                      <label className="text-xs font-medium text-muted-foreground uppercase">Full Name</label>
                      <p className="text-white">Alex Ferguson</p>
                  </div>
                   <div className="grid gap-1">
                      <label className="text-xs font-medium text-muted-foreground uppercase">Email Address</label>
                      <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <p className="text-white">alex.ferguson@mancity.com</p>
                      </div>
                  </div>
                   <div className="grid gap-1">
                      <label className="text-xs font-medium text-muted-foreground uppercase">Role</label>
                      <div className="flex items-center gap-2">
                          <Shield className="h-3 w-3 text-muted-foreground" />
                          <p className="text-white">Technical Director</p>
                      </div>
                  </div>
              </CardContent>
          </Card>

          {/* Activity Stats */}
          <Card className="bg-surface border-white/10">
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" /> System Activity
                  </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-white">1,240</div>
                      <div className="text-xs text-muted-foreground mt-1">Players Scouted</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-white">85</div>
                      <div className="text-xs text-muted-foreground mt-1">Reports Generated</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-white">12h</div>
                      <div className="text-xs text-muted-foreground mt-1">Time This Week</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
                      <div className="text-2xl font-bold text-white">Lvl 4</div>
                      <div className="text-xs text-muted-foreground mt-1">Clearance</div>
                  </div>
              </CardContent>
          </Card>
      </div>

      {/* Preferences */}
       <Card className="bg-surface border-white/10">
          <CardHeader>
              <CardTitle>Saved Preferences</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="flex flex-wrap gap-2">
                  {["Premier League", "La Liga", "U21 Talents", "Left-Footed CBs", "High xG Strikers"].map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/10 hover:bg-white/20 cursor-pointer">
                          {tag}
                      </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="h-6 text-xs text-primary">+ Add New</Button>
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
