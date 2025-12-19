"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { User, Mail, Shield, LogOut, Activity, X, Plus, Camera, RefreshCw } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

export default function ProfilePage() {
  const { profilePic, setProfilePic, resetProfilePic } = useUserStore();
  const [preferences, setPreferences] = useState(["Premier League", "La Liga", "U21 Talents", "Left-Footed CBs", "High xG Strikers"]);
  const [newTag, setNewTag] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const [picUrl, setPicUrl] = useState("");
  const [showPicInput, setShowPicInput] = useState(false);

  const removePreference = (tag: string) => {
    setPreferences(preferences.filter(p => p !== tag));
  };

  const addPreference = () => {
    if (newTag.trim() && !preferences.includes(newTag.trim())) {
      setPreferences([...preferences, newTag.trim()]);
      setNewTag("");
      setIsAdding(false);
    }
  };

  const updatePic = () => {
    if (picUrl.trim()) {
        setProfilePic(picUrl.trim());
        setPicUrl("");
        setShowPicInput(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 pb-6 border-b border-white/10"
      >
        <div className="group relative">
            <div className="h-24 w-24 rounded-full bg-surface border-white/10 p-1 overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
                <div className="h-full w-full rounded-full bg-background border-2 border-surface-hover overflow-hidden relative flex items-center justify-center">
                    {profilePic ? (
                        <img src={profilePic} alt="Profile" className="w-16 h-16 object-contain" />
                    ) : (
                        <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-muted-foreground" />
                    )}
                </div>
            </div>
            <button 
                onClick={() => setShowPicInput(!showPicInput)}
                className="absolute bottom-0 right-0 bg-primary p-1.5 rounded-full border-2 border-black text-black hover:scale-110 transition-transform shadow-lg"
            >
                <Camera className="h-4 w-4" />
            </button>
        </div>
        
        <div className="flex-1">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-white">Head Scout</h1>
                {showPicInput && (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 ml-4">
                        <Input 
                            value={picUrl}
                            onChange={(e) => setPicUrl(e.target.value)}
                            placeholder="Image URL..." 
                            className="h-8 w-48 text-xs"
                        />
                        <Button size="sm" className="h-8" onClick={updatePic}>Set</Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={resetProfilePic} title="Reset to default">
                            <RefreshCw className="h-4 w-4" />
                        </Button>
                    </motion.div>
                )}
            </div>
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
              <div className="flex flex-wrap gap-2 items-center">
                  {preferences.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/10 hover:bg-white/20 pl-3 pr-1 py-1 flex items-center gap-2">
                          {tag}
                          <button onClick={() => removePreference(tag)} className="hover:text-red-400 transition-colors">
                              <X className="h-3 w-3" />
                          </button>
                      </Badge>
                  ))}
                  
                  {isAdding ? (
                      <div className="flex items-center gap-2">
                          <Input 
                              autoFocus
                              value={newTag} 
                              onChange={(e) => setNewTag(e.target.value)}
                              className="h-7 w-32 text-xs" 
                              placeholder="New tag..."
                              onKeyDown={(e) => {
                                  if (e.key === 'Enter') addPreference();
                                  if (e.key === 'Escape') setIsAdding(false);
                              }}
                          />
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={addPreference}>
                              <Plus className="h-4 w-4" />
                          </Button>
                      </div>
                  ) : (
                      <Button variant="ghost" size="sm" className="h-6 text-xs text-primary gap-1" onClick={() => setIsAdding(true)}>
                          <Plus className="h-3 w-3" /> Add New
                      </Button>
                  )}
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
